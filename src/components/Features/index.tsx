import { Container } from '../Container'
import feature1 from "@/images/home/feature-1.png"
import feature2 from "@/images/home/feature-2.png"
import feature3 from "@/images/home/feature-3.png"
import feature4 from "@/images/home/feature-4.png"
import feature5 from "@/images/home/feature-5.png"
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    title: "Персоналізований підхід до вашого здоров'я",
    description:
      "Кожен пацієнт отримує індивідуально розроблену програму лікування на основі його унікальних потреб та стану здоров'я. Ми беремо до уваги ваші особливості та цілі для досягнення найкращих результатів.",
    list: ["Індивідуальні консультації з фахівцями.", "Створення програм реабілітації з урахуванням вашого стану.", "Постійний моніторинг прогресу і корекція програми."],
    image: feature1
  },
  {
    title: "Передові технології для вашого здоров'я",
    description:
      "Ми використовуємо новітні та перевірені часом методи реабілітації, включаючи Шрот терапію та інші сучасні підходи до відновлення здоров'я. Наші технології дозволяють ефективно та швидко вирішувати проблеми зі здоров'ям.",
    list: [
        "Використання Шрот терапії для корекції постави.", 
        "Сучасне обладнання для точної діагностики і лікування.", 
        "Постійне оновлення методів лікування згідно з останніми дослідженнями."
    ],
    image: feature2
  },
  {
    title: "Професіонали, яким можна довіряти",
    description:
      "Наша команда складається з фахівців з багаторічним досвідом у сфері реабілітації та корекції сколіозу. Ми постійно підвищуємо кваліфікацію, щоб надавати вам найкращі послуги.",
    list: ["Високий рівень професіоналізму та багаторічний досвід.", "Постійне підвищення кваліфікації спеціалістів.", "Індивідуальний підхід до кожного пацієнта."],
    image: feature3
  },
  {
    title: "Комплексний догляд за вашим здоров'ям",
    description:
      "Ми надаємо комплексний підхід до лікування, поєднуючи різні методики для досягнення найкращих результатів. Фізіотерапія, масаж та лікувальна фізкультура — все це працює разом для вашого здоров'я.",
    list: ["Поєднання кількох методів для досягнення кращого ефекту.", "Підтримка фізичного та емоційного здоров'я.", "Постійне коригування програми для максимального результату."],
    image: feature4
  },
  {
    title: "Ефективна Шрот терапія для корекції постави",
    description:
      "Спеціалізований підхід до лікування сколіозу за допомогою Шрот терапії, яка допомагає покращити поставу та зменшити біль. Ми використовуємо цей метод для довготривалих результатів.",
    list: ["Підвищення якості життя за рахунок корекції постави.", "Безпечні та перевірені методики.", "Комплексна реабілітація для пацієнтів зі сколіозом."],
    image: feature5
  },
]

export default function Features() {
  return (
    <Container>
        {features.map(({title, description, list, image }, index) => (
            <div className="overflow-hidden bg-white my-24 sm:my-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {index % 2 === 1 && <Image src={image} alt={title} className="rounded-xl shadow-black ring-4 ring-gray-400/10" />}
                
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {description}
                        </p>
                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">

                        <dl className="col-span-2 text-base leading-7 text-gray-600 pl-9-lg">
                            {list.map((item) => (
                            <div key={item} className="relative pl-9 m-2">
                                <dt className="text-lg leading-8 text-gray-600">
                                    <CheckIcon aria-hidden="true" className="absolute left-0 top-1 h-5 w-5 text-indigo-500" />
                                    {item}
                                </dt>
                            </div>
                            ))}
                        </dl>

                        </dl>
                    </div>
                </div>
                {index % 2 === 0 && <Image src={image} alt={title} className="rounded-xl shadow-black ring-4 ring-gray-400/10"
                />}
            </div>
            </div>
        </div>
    ))}</Container>

  )
}