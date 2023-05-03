import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import HistoryFianceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

interface IData{
    description: string;
    amountFormated: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const { type } = useParams();

    const [data, setData] = useState<IData[]>([]);

    const listaData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses 
    }, [type]);

    useEffect(() => {
        const response = listaData.map( item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormated: item.amount,
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        })
        setData(response);
    }, []);
    
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
                {
                    data.map( item => (
                        <HistoryFianceCard
                            key={item.dataFormatted + 1}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormated}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}
export default List;