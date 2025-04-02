import CasePage from "@/components/CasePage";
import { parqueGlobal } from "@/helpers/CasesPage";


export default function Page() {
  return (
    <CasePage data={parqueGlobal} />
  );
}