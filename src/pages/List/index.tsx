import ContentHeader from "../../components/ContentHeader";
import HistoryFianceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";

const List: React.FC = () => {
    const options = [
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' }
    ]  
    return (
        <Container>
                <ContentHeader title='Entradas' lineColor='pink'>
                    <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

                <HistoryFianceCard
                     
                    tagColor="green"
                    title="Aluguel"
                    subtitle="01/05/2023"
                    amount="R$ 1.000,00"
                />

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