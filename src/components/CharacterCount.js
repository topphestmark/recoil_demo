import { useRecoilValue } from "recoil";
import { charCountState } from "../charCountState";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
