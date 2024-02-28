interface Props {
  children: string;
  type?: string;
  size?: string;
}

const Types: any = {
  primary:
    "bg-linearOrange-200 rounded-full text-white font-semibold hover:bg-linearOrange-100 transition-all duration-300",
};

const Sizes: any = {
  l: "w-[140px] py-2",
  xl: "w-[200px] py-2",
};

const Button = ({ children, type = "primary", size = "l" }: Props) => {
  return (
    <button className={`${Types[type]} ${Sizes[size]}`}>{children}</button>
  );
};

export default Button;
