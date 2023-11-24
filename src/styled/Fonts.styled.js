import InkFreeWoff from "../assets/fonts/inkfree-webfont.woff";
import InkFreeWoff2 from "../assets/fonts/inkfree-webfont.woff2";
import PoppinsRegularWoff from "../assets/fonts/poppins-regular-webfont.woff";
import PoppinsRegularWoff2 from "../assets/fonts/poppins-regular-webfont.woff2";
import PoppinsMediumWoff from "../assets/fonts/poppins-medium-webfont.woff";
import PoppinsMediumWoff2 from "../assets/fonts/poppins-medium-webfont.woff2";
import PoppinsSemiBoldWoff from "../assets/fonts/poppins-semibold-webfont.woff";
import PoppinsSemiBoldWoff2 from "../assets/fonts/poppins-semibold-webfont.woff2";
import PoppinsBoldWoff from "../assets/fonts/poppins-bold-webfont.woff";
import PoppinsBoldWoff2 from "../assets/fonts/poppins-bold-webfont.woff2";

export const FontFace = `
    @font-face {
        font-family: 'Ink Free Regular';
        src: url(${InkFreeWoff2}) format('woff2'),
            url(${InkFreeWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins Regular';
        src: url(${PoppinsRegularWoff2}) format('woff2'),
            url(${PoppinsRegularWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins Medium';
        src: url(${PoppinsMediumWoff2}) format('woff2'),
            url(${PoppinsMediumWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins SemiBold';
        src: url(${PoppinsSemiBoldWoff2}) format('woff2'),
            url(${PoppinsSemiBoldWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins Bold';
        src: url(${PoppinsBoldWoff2}) format('woff2'),
            url(${PoppinsBoldWoff}) format('woff');
    }
`;
