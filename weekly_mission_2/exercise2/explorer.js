const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log('Ejercicio 2, punto 1');

explorers.forEach(explorer => { console.log(explorer.name) });

console.log('Ejercicio 2, punto 2');

explorers.forEach(explorer => { console.log(explorer.stack) })

console.log('Ejercicio 2, punto 3');

const stack = explorers.map(item => item.stack);
console.log(stack);

console.log('Ejercicio 2, punto 4');

const explorers_with_js = explorers.filter(item => item.stack.includes("js"));
console.log(explorers_with_js);

console.log('Ejercicio 2, punto 5');

const first_explorer_cdmx = explorers.find(item => item.city === "CDMX");

console.log(first_explorer_cdmx);

console.log('Ejercicio 2, punto 6');

const all_exercises = explorers.reduce((acc, item) => acc + item.exercises_completed, 0);

console.log(all_exercises);

console.log('Ejercicio 2, punto 7');

const SomeFinished = explorers.some(item => item.missions.frontend.exercisesFinished === true)
console.log(SomeFinished)

console.log('Ejercicio 2, punto 8');

const EveryFinished = explorers.every(item => item.missions.onboarding.isFinished === true)
console.log(EveryFinished)