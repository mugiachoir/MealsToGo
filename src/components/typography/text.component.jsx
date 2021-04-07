import styled from "styled-components/native";

const defaultTextStyle = (theme) => `
    font-family:${theme.fonts.body};
    font-weight:${theme.fontWeights.regular};
    color:${theme.colors.text.primary};
    flex-wrap:wrap;
    margin-top:0px;
    margin-bottom:0px;
`;

const body = (theme) => `
    font-size:${theme.fontSizes.body};
`;

const heading = (theme) => `
    font-size:${theme.fontSizes.h5};
    font-family:${theme.fonts.heading};
    text-align:center;
`;

const hint = (theme) => `
    font-size:${theme.fontSizes.body};
`;

const caption = (theme) => `
    font-size:${theme.fontSizes.caption};
    color:${theme.colors.text.secondary};
`;

const error = (theme) => `
    color:${theme.colors.text.error};
    font-size:${theme.fontSizes.caption};
`;

const label = (theme) => `
    font-size:${theme.fontSizes.title};
    font-family:${theme.fonts.subHeading};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  heading,
};

const Text = styled.Text`
  ${({ theme }) => defaultTextStyle(theme)};
  ${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: "body",
};

export default Text;
