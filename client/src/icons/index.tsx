import { IconType } from "react-icons";

import { FiTrash2 as Delete } from "react-icons/fi";
import { RiProgress3Line as Progress } from "react-icons/ri";
import { IoMdDoneAll as Done } from "react-icons/io";
import { RiEditFill as Edit } from "react-icons/ri";

type Iconsize = "small" | "medium" | "large";

const iconSizes: Record<Iconsize, number> = {
  small: 18,
  medium: 22,
  large: 26,
} as const;

type IconWrapperProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Icon = (Icon: IconType, { size = iconSizes.small }: IconWrapperProps) => {
  return (props: IconWrapperProps) => <Icon fontSize={size} {...props} />;
};

export const DeleteIcon = Icon(Delete, {});
export const ProgressIcon = Icon(Progress, {});
export const EditIcon = Icon(Edit, {});
export const DoneIcon = Icon(Done, {});
