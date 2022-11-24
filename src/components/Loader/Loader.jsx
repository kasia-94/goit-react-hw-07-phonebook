import { Triangle } from 'react-loader-spinner';
import { TriangleContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <TriangleContainer>
      <Triangle
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </TriangleContainer>
  );
};
