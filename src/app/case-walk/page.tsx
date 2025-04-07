import CasePage from "@/components/CasePage";
import { walk } from "@/helpers/CasesPage";

export default function Page() {
  return (
    <CasePage data={walk} />
  );
}