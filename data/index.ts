import {
  HiBookOpen,
  HiEnvelope,
  HiInboxStack,
  HiChatBubbleLeftEllipsis,
} from "react-icons/hi2";
import { HiHome } from "react-icons/hi";

export const NAV_ITEMS = [
  { id: "1", name: "Головна", path: "/", icon: HiHome },
  { id: "2", name: "Довідник", path: "/handbook", icon: HiBookOpen },
  { id: "3", name: "Каталог", path: "/catalog", icon: HiInboxStack },
  { id: "4", name: "Блог", path: "/blog", icon: HiChatBubbleLeftEllipsis },
  { id: "5", name: "Контакти", path: "/contact", icon: HiEnvelope },
];
