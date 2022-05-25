// Обрабатываем вывод в консоль
// Библиотека chalk добавляет различные цвета в консоль
// Библиотека dedent используется для стайла отображения строки в коде при конкатенации в ``
import chalk from 'chalk';
import dedent from 'dedent-js';

// Вывод ошибки
const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

// Вывод успешной операции
const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

// Вывод параметра HELP
const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`
  );
};

// Вывод погоды
const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed}
		`
	);
};

export { printError, printSuccess, printHelp, printWeather };
