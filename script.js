document.addEventListener('DOMContentLoaded', () => {
    const conversionData = {
        'length': {
            'meter': { name: '米', symbol: 'm', factor: 1 },
            'kilometer': { name: '千米', symbol: 'km', factor: 1000 },
            'centimeter': { name: '厘米', symbol: 'cm', factor: 0.01 },
            'millimeter': { name: '毫米', symbol: 'mm', factor: 0.001 },
            'micrometer': { name: '微米', symbol: 'μm', factor: 0.000001 },
            'nanometer': { name: '纳米', symbol: 'nm', factor: 0.000000001 },
            'mile': { name: '英里', symbol: 'mi', factor: 1609.344 },
            'yard': { name: '码', symbol: 'yd', factor: 0.9144 },
            'foot': { name: '英尺', symbol: 'ft', factor: 0.3048 },
            'inch': { name: '英寸', symbol: 'in', factor: 0.0254 },
            'nautical_mile': { name: '海里', symbol: 'nmi', factor: 1852 },
            'light_year': { name: '光年', symbol: 'ly', factor: 9460730472580800 },
            'astronomical_unit': { name: '天文单位', symbol: 'AU', factor: 149597870700 },
            'angstrom': { name: '埃', symbol: 'Å', factor: 1e-10 }
        },
        'volume': {
            'cubic_meter': { name: '立方米', symbol: 'm³', factor: 1 },
            'cubic_centimeter': { name: '立方厘米', symbol: 'cm³', factor: 0.000001 },
            'liter': { name: '升', symbol: 'L', factor: 0.001 },
            'milliliter': { name: '毫升', symbol: 'mL', factor: 0.000001 },
            'cubic_foot': { name: '立方英尺', symbol: 'ft³', factor: 0.0283168 },
            'cubic_inch': { name: '立方英寸', symbol: 'in³', factor: 0.0000163871 },
            'gallon_us': { name: '加仑(美)', symbol: 'gal', factor: 0.00378541 },
            'quart_us': { name: '夸脱(美)', symbol: 'qt', factor: 0.000946353 },
            'gallon_uk': { name: '加仑(英)', symbol: 'gal', factor: 0.00454609 },
            'barrel_us': { name: '桶(美)', symbol: 'bbl', factor: 0.158987 }
        },
        'weight': {
            'kilogram': { name: '千克', symbol: 'kg', factor: 1 },
            'gram': { name: '克', symbol: 'g', factor: 0.001 },
            'milligram': { name: '毫克', symbol: 'mg', factor: 0.000001 },
            'metric_ton': { name: '吨', symbol: 't', factor: 1000 },
            'pound': { name: '磅', symbol: 'lb', factor: 0.453592 },
            'ounce': { name: '盎司', symbol: 'oz', factor: 0.0283495 },
            'carat': { name: '克拉', symbol: 'ct', factor: 0.0002 },
            'grain': { name: '格令', symbol: 'gr', factor: 0.0000647989 }
        },
        'area': {
            'square_meter': { name: '平方米', symbol: 'm²', factor: 1 },
            'square_kilometer': { name: '平方千米', symbol: 'km²', factor: 1000000 },
            'square_mile': { name: '平方英里', symbol: 'mi²', factor: 2589988.11 },
            'square_yard': { name: '平方码', symbol: 'yd²', factor: 0.836127 },
            'square_foot': { name: '平方英尺', symbol: 'ft²', factor: 0.092903 },
            'acre': { name: '英亩', symbol: 'ac', factor: 4046.86 },
            'hectare': { name: '公顷', symbol: 'ha', factor: 10000 }
        },
        'speed': {
            'meter_per_second': { name: '米/秒', symbol: 'm/s', factor: 1 },
            'kilometer_per_hour': { name: '千米/时', symbol: 'km/h', factor: 1 / 3.6 },
            'mile_per_hour': { name: '英里/时', symbol: 'mph', factor: 0.44704 },
            'knot': { name: '节', symbol: 'kn', factor: 0.514444 },
            'foot_per_second': { name: '英尺/秒', symbol: 'ft/s', factor: 0.3048 },
            'mach': { name: '马赫', symbol: 'Ma', factor: 340.29 }
        },
        'currency': {
            'USD': { name: '美元', symbol: 'USD', factor: 1 },
            'EUR': { name: '欧元', symbol: 'EUR', factor: 1.08 },
            'CNY': { name: '人民币', symbol: 'CNY', factor: 0.14 },
            'JPY': { name: '日元', symbol: 'JPY', factor: 0.0065 },
            'GBP': { name: '英镑', symbol: 'GBP', factor: 1.27 },
            'CAD': { name: '加元', symbol: 'CAD', factor: 0.73 },
            'AUD': { name: '澳元', symbol: 'AUD', factor: 0.66 }
        },
        'flow_rate': {
            'cubic_meter_per_second': { name: '立方米/秒', symbol: 'm³/s', factor: 1 },
            'cubic_meter_per_hour': { name: '立方米/时', symbol: 'm³/h', factor: 1 / 3600 },
            'cubic_foot_per_minute': { name: '立方英尺/分', symbol: 'cfm', factor: 0.000471947443 },
            'liter_per_second': { name: '升/秒', symbol: 'L/s', factor: 0.001 },
            'gallon_per_minute_us': { name: '加仑/分(美)', symbol: 'gpm', factor: 0.0000630902 }
        },
        'pressure': {
            'pascal': { name: '帕斯卡', symbol: 'Pa', factor: 1 },
            'kilopascal': { name: '千帕', symbol: 'kPa', factor: 1000 },
            'megapascal': { name: '兆帕', symbol: 'MPa', factor: 1000000 },
            'bar': { name: '巴', symbol: 'bar', factor: 100000 },
            'millibar': { name: '毫巴', symbol: 'mbar', factor: 100 },
            'atmosphere': { name: '大气压', symbol: 'atm', factor: 101325 },
            'psi': { name: '磅/平方英寸', symbol: 'psi', factor: 6894.76 },
            'torr': { name: '托', symbol: 'Torr', factor: 133.322 },
            'inch_of_mercury': { name: '英寸汞柱', symbol: 'inHg', factor: 3386.39 }
        },
        'power': {
            'watt': { name: '瓦', symbol: 'W', factor: 1 },
            'kilowatt': { name: '千瓦', symbol: 'kW', factor: 1000 },
            'megawatt': { name: '兆瓦', symbol: 'MW', factor: 1000000 },
            'horsepower_metric': { name: '米制马力', symbol: 'hp(M)', factor: 735.49875 },
            'horsepower_us': { name: '英制马力', symbol: 'hp(I)', factor: 745.7 },
            'btu_per_hour': { name: '英热单位/时', symbol: 'BTU/h', factor: 0.293071 }
        },
        'energy': {
            'joule': { name: '焦耳', symbol: 'J', factor: 1 },
            'kilojoule': { name: '千焦', symbol: 'kJ', factor: 1000 },
            'calorie': { name: '卡路里', symbol: 'cal', factor: 4.184 },
            'kilocalorie': { name: '千卡', symbol: 'kcal', factor: 4184 },
            'watt_hour': { name: '瓦时', symbol: 'Wh', factor: 3600 },
            'kilowatt_hour': { name: '千瓦时', symbol: 'kWh', factor: 3600000 },
            'btu': { name: '英热单位', symbol: 'BTU', factor: 1055.06 }
        },
        'temperature': {
            'celsius': { name: '摄氏度', symbol: '℃', factor: 1 },
            'fahrenheit': { name: '华氏度', symbol: '℉', factor: 1 },
            'kelvin': { name: '开尔文', symbol: 'K', factor: 1 }
        },
        'frequency': {
            'hertz': { name: '赫兹', symbol: 'Hz', factor: 1 },
            'kilohertz': { name: '千赫', symbol: 'kHz', factor: 1000 },
            'megahertz': { name: '兆赫', symbol: 'MHz', factor: 1000000 },
            'gigahertz': { name: '吉赫', symbol: 'GHz', factor: 1000000000 }
        },
        'force': {
            'newton': { name: '牛顿', symbol: 'N', factor: 1 },
            'kilonewton': { name: '千牛', symbol: 'kN', factor: 1000 },
            'pound_force': { name: '磅力', symbol: 'lbf', factor: 4.44822 },
            'kilogram_force': { name: '千克力', symbol: 'kgf', factor: 9.80665 }
        },
        'torque': {
            'newton_meter': { name: '牛顿米', symbol: 'N·m', factor: 1 },
            'kilogram_force_meter': { name: '千克力米', symbol: 'kgf·m', factor: 9.80665 },
            'kilogram_force_centimeter': { name: '千克力厘米', symbol: 'kgf·cm', factor: 0.0980665 },
            'pound_foot': { name: '磅英尺', symbol: 'lbf·ft', factor: 1.35582 },
            'pound_inch': { name: '磅英寸', symbol: 'lbf·in', factor: 0.112985 }
        }
    };

    const converterModules = document.querySelectorAll('.converter-module');

    converterModules.forEach(module => {
        const category = module.dataset.category;
        const inputValue = module.querySelector('.inputValue');
        const inputUnit = module.querySelector('.inputUnit');
        const outputUnit = module.querySelector('.outputUnit');
        const resultValue = module.querySelector('.resultValue');

        function populateUnits() {
            const units = conversionData[category];
            inputUnit.innerHTML = '';
            outputUnit.innerHTML = '';
            for (const key in units) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = `${units[key].name} (${units[key].symbol})`;
                inputUnit.appendChild(option);

                const option2 = document.createElement('option');
                option2.value = key;
                option2.textContent = `${units[key].name} (${units[key].symbol})`;
                outputUnit.appendChild(option2);
            }
        }

        function convert() {
            const value = parseFloat(inputValue.value);
            if (isNaN(value)) {
                resultValue.textContent = '0';
                return;
            }

            const fromUnit = inputUnit.value;
            const toUnit = outputUnit.value;
            
            let finalValue;
            
            // 特殊处理温度转换
            if (category === 'temperature') {
                let baseCelsius;
                if (fromUnit === 'celsius') {
                    baseCelsius = value;
                } else if (fromUnit === 'fahrenheit') {
                    baseCelsius = (value - 32) * 5/9;
                } else if (fromUnit === 'kelvin') {
                    baseCelsius = value - 273.15;
                }

                if (toUnit === 'celsius') {
                    finalValue = baseCelsius;
                } else if (toUnit === 'fahrenheit') {
                    finalValue = baseCelsius * 9/5 + 32;
                } else if (toUnit === 'kelvin') {
                    finalValue = baseCelsius + 273.15;
                }
            } else {
                const fromFactor = conversionData[category][fromUnit].factor;
                const toFactor = conversionData[category][toUnit].factor;
                const baseValue = value * fromFactor;
                finalValue = baseValue / toFactor;
            }

            let result = finalValue.toFixed(10);
            result = parseFloat(result);
            
            resultValue.textContent = result;
        }

        inputValue.addEventListener('input', convert);
        inputUnit.addEventListener('change', convert);
        outputUnit.addEventListener('change', convert);

        populateUnits();
    });
});
