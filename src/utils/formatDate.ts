const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);
    // Pega dia e formata
    const day = dateFormatted.getDate() > 9
        ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    // Pega mês e formata
    const month = dateFormatted.getMonth() + 1 > 9
        ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`;
    // Pega ano e formata
    const year = dateFormatted.getFullYear();
    // Monta Dia Mês e Ano!
    return `${day}/${month}/${year}`;
}
export default formatDate; // Torna disponivel para uso
/***
{new Intl.DateTimeFormat('pt-BR').format(
    new Date(transaction.createdAt)
)}
 */