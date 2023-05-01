import { Container, Tag } from "./styles";

interface IHistoryFinanceCard{
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFianceCard: React.FC<IHistoryFinanceCard> = ({
    tagColor, title, subtitle, amount
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>  
        </Container>
    )
}

export default HistoryFianceCard;