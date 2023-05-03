import { useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFianceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";

const List: React.FC = () => {
    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saída' 
    }, [type]);
    
    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E' 
    }, [type]);

    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro' }
    ]
    const years = [
        { value: 2018, label: 2018 },
        { value: 2019, label: 2019 },
        { value: 2020, label: 2020 },
        { value: 2021, label: 2021 }
    ]
    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>    
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Filters>
                <button className="tag-filters tag-filter-recurrent" type="button">Recorrentes</button>
                <button className="tag-filters tag-filter-eventual" type="button">Eventuais</button>
            </Filters>
            <Content>
                <HistoryFianceCard
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />
            </Content>
        </Container>
    )
}
export default List;