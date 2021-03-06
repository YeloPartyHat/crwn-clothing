import styled from 'styled-components/macro';
import CollectionItem from '../../components/collection-item/collection-item.component';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const Items = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

export const CustomCollectionItem = styled(CollectionItem)`
  margin-bottom: 30px;
`;