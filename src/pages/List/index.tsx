import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from 'uuid';

import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import HistoryFianceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listMonths from "../../utils/months";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

    // essa interface do tipo da lista a se criar
interface IData{
    description: string;
    amountFormated: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const { type } = useParams(); // aqui pegamos o parametro passado na url do navegador
    const [data, setData] = useState<IData[]>([]); // aqui controla o estado da data

    // essa função carrega os todos tipos de listas entradas e saindas
    const listaData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type]);

    // essa função carrega uma lista de acordo com o conteudo importado
    useEffect(() => {
        const response = listaData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormated: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        })
        setData(response);
    }, []);
    
    // essa função carrega o tipo de entrada e coloca no titulo
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saída'
    }, [type]);
    
    // essa função colcoa as tagns de acordo com o tipo
    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type]);

    // essa função carrega os meses do util
    const months = useMemo(() => {
        return listMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    },[]);
    
    const years = [
        { value: 2018, label: 2018 },
        { value: 2019, label: 2019 },
        { value: 2020, label: 2020 },
        { value: 2021, label: 2021 }
    ]
    return (
        // Aqui apresenta para a viu tudo que foi processado por funções
        <Container>
            {/** Aqui carrega o titulo e a tag pela função criada */}
            <ContentHeader title={title} lineColor={lineColor}>    
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            {/** Aqui carrega o filtro criado de acordo com as tags */}
            <Filters>
                <button className="tag-filters tag-filter-recurrent" type="button">Recorrentes</button>
                <button className="tag-filters tag-filter-eventual" type="button">Eventuais</button>
            </Filters>
            {/** Aqui carrega todos os resultados da lista formatados pelas funções */}
            <Content>
                {
                    data.map( item => (
                        <HistoryFianceCard
                            key={uuid()}
                            tagColor={item.tagColor}
                            title={item.description}
                            // subtitle={ new Intl.DateTimeFormat('pt-BR')
                            //     .format( new Date(item.dataFormatted))
                            // }
                            subtitle={ formatDate(item.dataFormatted) }
                            amount={item.amountFormated}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}
export default List;