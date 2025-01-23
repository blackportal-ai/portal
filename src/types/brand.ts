type BrandItemVariantKeys = 'svg';

type BrandItemVariantValue = {
  src: string;
};

type BrandItemVariant = Record<BrandItemVariantKeys, BrandItemVariantValue>;

export type BrandItem = {
  variants: BrandItemVariant;
};
