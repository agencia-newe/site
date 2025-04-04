import CasePage from "@/components/CasePage";
import { villas } from "@/helpers/CasesPage";

export default function Page() {
  return (
    <CasePage data={villas} />
  );
}