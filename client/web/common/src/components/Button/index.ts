import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const ButtonPrimary = styled(Button)`
  --localBgColor: var(--accentColor);
  --localBgHoverColor: var(--accentHoverColor);

  &:disabled,
  &.is-disabled {
      --localTextColor: var(--buttonDisabledTextColor);
        --localBgColor: var(--disabledBgColor);
    }
`;
export { Button };
