import CasePage from "@/components/CasePage";
import { blend } from "@/helpers/CasesPage";

export default function Page() {
  return (
    <CasePage data={blend} />
  );
}