import { ExecGroup, ExecWrapper } from "./Exec.styled";
import { SectionHeading } from "../../../styled/Text.styled";
import { StyledDivider } from "../../../styled/Utils.styled";
import ExecCard from "../../ExecCard/ExecCard";
import Exec1 from "../../../assets/images/exec1.png";
import Exec2 from "../../../assets/images/exec2.png";

const Exec = () => {
  return (
    <>
      <StyledDivider />
      <ExecWrapper>
        <SectionHeading>Meet the executives</SectionHeading>

        <ExecGroup>
          <ExecCard
            src={Exec1}
            position="Chief Executive Officer"
            desc="Lorem ipsum dolor sit amet consectetur. Ullamcorper ac massa sit
          curabitur tellus nec libero proin mauris. Et nisi cras netus lorem.
          Ullamcorper ac massa sit curabitur tellus nec libero proin mauris. Et
          nisi cras netus lorem. Ul"
          />

          <ExecCard
            src={Exec2}
            position="Music Director"
            desc="Lorem ipsum dolor sit amet consectetur. Ullamcorper ac massa sit
          curabitur tellus nec libero proin mauris. Et nisi cras netus lorem.
          Ullamcorper ac massa sit curabitur tellus nec libero proin mauris. Et
          nisi cras netus lorem. Ul"
          />
        </ExecGroup>
      </ExecWrapper>
    </>
  );
};

export default Exec;
