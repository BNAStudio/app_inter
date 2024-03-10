import { useState, useEffect } from 'react';
import { ExchangeRates } from '../types/types';

const useCurrencyConverter = () => {
    const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({ USD: 0, EUR: 1 });

    useEffect(() => {
        fetch('https://api.frankfurter.app/latest?from=EUR&to=USD')
            .then(response => response.json())
            .then(data => {
                setExchangeRates({ EUR: 1, USD: data.rates.USD });
            });
    }, []);
    const convertTo = (amount: number, toCurrency: keyof ExchangeRates): number => {
        if (toCurrency === 'EUR')return amount / exchangeRates.USD;
        return amount * exchangeRates[toCurrency];
    };

    return { convertTo };
};

export default useCurrencyConverter;