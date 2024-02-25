interface Props {
  children: string;
  type ?: string;
  size ?: string;
}

const Types: any = {
  primary: "bg-linearOrange-100 rounded-full",
};

const Sizes: any = {
  l: "px-10 py-2" , 
  xl: "px-14 py-2"
}


const Button = ({ children, type = "primary", size = "l" }: Props) => {
  return <button className={`${Types[type]} ${Sizes[size]}`}>{children}</button>;
};

export default Button;
