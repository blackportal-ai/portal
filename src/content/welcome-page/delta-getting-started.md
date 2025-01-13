---
---

### Adding Delta to Your Project

To add the Delta library to your Rust project, you need to include it in your
`Cargo.toml` file. Follow these steps:

1. Open your project's `Cargo.toml` file.
2. Add the following line under `[dependencies]`:

```toml title="Cargo.toml"
[dependencies]
deltaml = "0.1.0"
```

Currently, we have published Delta to
[deltaml](https://crates.io/crates/deltaml), but note that this is still
experimental in alpha stage so things might break in the upcoming iterations.

### 1. Create the `main` Function

We start with an empty asynchronous main function using `#[tokio::main]`

```rust title="src/main.rs"
#[tokio::main]
async fn main() {
    println!("Starting the Delta example...");
}
```

### 2. Define a Neural Network

Next, we create a neural network using Delta’s `Sequential` model.

```rust title="src/main.rs"
let mut model = Sequential::new()
    .add(Flatten::new(Shape::from(IxDyn(&[32, 32, 3])))) // CIFAR-10: 32x32x3 -> 3072
    .add(Dense::new(128, Some(ReluActivation::new()), true)) // Input: 3072, Output: 128
    .add(Dense::new(10, Some(SoftmaxActivation::new()), false)); // Output: 10 classes

model.summary();
```

### 3. Compile the Model

Before training, we need to compile the model by defining the optimizer and loss
function.

```rust title="src/main.rs"
let optimizer = Adam::new(0.001);
model.compile(optimizer, MeanSquaredLoss::new());
```

### 4. Load the Dataset

Now, we load the CIFAR-10 dataset for training, validation, and testing.

```rust title="src/main.rs"
let mut train_data = Cifar10Dataset::load_train().await;
let val_data = Cifar10Dataset::load_val().await;
let test_data = Cifar10Dataset::load_test().await;

println!("Train dataset size: {}", train_data.len());
```

### 5. Train the Model

We train the model using the loaded training data.

```rust title="src/main.rs"
let epoch = 10;
let batch_size = 32;

match model.fit(&mut train_data, epoch, batch_size) {
    Ok(_) => println!("Model trained successfully"),
    Err(e) => println!("Failed to train model: {}", e),
}
```

### 6. Validate the Model

After training, we validate the model using the validation dataset.

```rust title="src/main.rs"
match model.validate(&val_data, batch_size) {
    Ok(validation_loss) => println!("Validation Loss: {:.6}", validation_loss),
    Err(e) => println!("Failed to validate model: {}", e),
}
```

### 7. Evaluate the Model

Finally, we evaluate the model on the test dataset.

```rust title="src/main.rs"
let accuracy = model.evaluate(&test_data, batch_size).expect("Failed to evaluate the model");
println!("Test Accuracy: {:.2}%", accuracy * 100.0);
```

### 8. Save the Model

Once satisfied with the model, we save it to a file for later use.

```rust title="src/main.rs"
model.save("model_path").unwrap();
```
