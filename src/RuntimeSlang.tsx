import {
  BaseTypeProps,
  forwardRefWithAs,
  PropsWithAs,
  TypeComponent,
} from "@tone-row/slang";

export type TypeProps = PropsWithAs<BaseTypeProps<string, string>>;
export const Type = forwardRefWithAs<TypeProps, "div">(TypeComponent);
