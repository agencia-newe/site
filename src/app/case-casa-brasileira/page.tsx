import CasePage from "@/components/CasePage";
import { casaBrasileira } from "@/helpers/CasesPage";

export default function Page() {
  return (
    <CasePage data={casaBrasileira} />
  );
}