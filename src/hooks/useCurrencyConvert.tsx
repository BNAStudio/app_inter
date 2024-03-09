import { useState, useEffect } from 'react';
import { ExchangeRates } from '../models/models';

const useCurrencyConverter = () => {
    const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({ USD: 0, EUR: 1 });

    useEffect(() => {
        fetch('https://api.frankfurter.app/latest?from=EUR&to=USD')
            .then(response => response.json())
            .then(data => {
                setExchangeRates({ ...exchangeRates, USD: data.rates.USD });
            });
    }, [exchangeRates]);

    const convertTo = (amount: number, toCurrency: keyof ExchangeRates): number => {
        return amount * exchangeRates[toCurrency];
    };

    return { convertTo };
};

export default useCurrencyConverter;