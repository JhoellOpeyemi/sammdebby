import { StyledText } from "../../styled/Text.styled";
import Picture from "../Picture/Picture";
import { Grid, GridItems } from "./AboutGrid.styled";

import TestImage from "../../assets/images/test-image.png";
import TestImage2 from "../../assets/images/test-image2.png";
import TestImage3 from "../../assets/images/test-image3.png";

const AboutGrid = () => {
  return (
    <Grid>
      <GridItems>
        <StyledText>
          Sammdebby is not a person or a place, we are a group of dedicated
          music experts and engineers.
        </StyledText>
        <StyledText>
          Since we were founded in 2008, we have trained over 500 students, 25
          schools and have performed in numerous shows and concerts.
        </StyledText>
      </GridItems>

      <GridItems>
        <Picture src={TestImage} width="14.0625rem" height="19rem" />
      </GridItems>

      <GridItems>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur. Ullamcorper ac massa sit
          curabitur tellus nec libero proin mauris. Et nisi cras netus lorem.
          Ullamcorper ac massa sit curabitur tellus nec libero proin mauris. Et
          nisi cras netus lorem. Ullamcorper ac massa sit curabitur tellus nec
          libero proin mauris. Et nisi cras netus lorem.
        </StyledText>
      </GridItems>

      <GridItems>
        <Picture src={TestImage2} width="13rem" height="22rem" />
      </GridItems>

      <GridItems>
        <Picture src={TestImage3} width="100%" height="16rem" />
      </GridItems>

      <GridItems>
        <StyledText>
          Sammdebby is not a person or a place, we are a group of dedicated
          music experts and engineers.
        </StyledText>
        <StyledText>
          Since we were founded in 2008, we have trained over 500 students, 25
          schools and have performed in numerous shows and concerts.
        </StyledText>
      </GridItems>
    </Grid>
  );
};

export default AboutGrid;
