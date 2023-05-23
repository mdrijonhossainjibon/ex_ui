import { FilterPriceCustomStep } from './FilterPriceCustomStep';
import { FilterPriceSignificantDigit } from './FilterPriceSignificantDigit';


export const buildFilterPrice = (filter )=> {
	switch (filter.type) {
		case 'significant_digits':
			return new FilterPriceSignificantDigit(filter );
		case 'custom_price_steps':
			return new FilterPriceCustomStep(filter );
		default:
			throw new Error(`Unknown filter ${filter.type}`);
	}
};



export const validatePriceStep = (price  = 0, filters) => {
	return filters.reduce(
		(result, filter) => {
			const currentValidation = filter.validatePriceStep(+price);

			if (!currentValidation.valid) {
				result.valid = false;
				if (currentValidation.priceStep > result.priceStep) {
					result.priceStep = currentValidation.priceStep;
				}
			}

			return result;
		},
		{ valid: true, priceStep: 0 } ,
	);
};
