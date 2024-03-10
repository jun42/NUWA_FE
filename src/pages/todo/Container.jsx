import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { Card } from './Card.jsx';

export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
        checked: false,
      },
      {
        id: 2,
        text: 'Make it generic enough',
        checked: true,
      },
      {
        id: 3,
        text: 'Write README',
        checked: true,
      },
      {
        id: 4,
        text: 'Create some examples',
        checked: false,
      },
      {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        checked: false,
      },
      {
        id: 6,
        text: '???',
        checked: false,
      },
      {
        id: 7,
        text: 'PROFIT',
        checked: true,
      },
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, []);

    const toggleChecked = useCallback((id) => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, checked: !card.checked } : card
        )
      );
    }, []);

    console.log(cards);

    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          checked={card.checked}
          moveCard={moveCard}
          toggleChecked={toggleChecked}
        />
      );
    }, []);
    return (
      <>
        <div>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
