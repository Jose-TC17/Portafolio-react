import styleCardTec from "../CSS/CardTec.module.css";

type Props = {
  titleCard: string;
  cardPaf: string;
};

export default function CardTec(props: Props) {
  const { titleCard, cardPaf } = props;
  return (
    <div className={styleCardTec.containerCardTec}>
      <h4 className={styleCardTec.h4}>{titleCard}</h4>
      <hr className={styleCardTec.hr} />
      <p className={styleCardTec.p}>{cardPaf}</p>
    </div>
  );
}
