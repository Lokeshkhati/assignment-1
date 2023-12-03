'use client'

import { IoMdCheckmark } from "react-icons/io";
import TextWithEmoji from './TextWithEmoji'
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const plans = [
    {
        name: 'Free',
        id: 'free',
        href: '#',
        priceMonthly: '$0',
        features: [
            'Access to all basic features',
            'Reporting and analytics',
            'Up to 5 individual users',
            'Chat and email support',
            '3+ integrations',
        ],
        mostPopular: false,
    },
    {
        name: 'Standard',
        id: 'standard',
        href: '#',
        priceMonthly: '$25',
        features: [
            'Access to all basic features',
            'Reporting and analytics',
            'Up to 5 individual users',
            'Chat and email support',
            '3+ integrations',
            'Account performance reporting'
        ],
        mostPopular: true,
    },
    {
        name: 'Business',
        id: 'plan-enterprise',
        href: '#',
        priceMonthly: '$42',
        features: [
            'Access to all basic features',
            'Reporting and analytics',
            'Up to 5 individual users',
            'Chat and email support',
            '3+ integrations',
        ],
        mostPopular: false,
    },
]

export function Pricing() {

    return (
        <div className=" bg-white py-24 sm:pt-48">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto md:max-w-4xl text-center">
                    <TextWithEmoji emoji="💲" text="PRICING" />
                    <p className="mt-2 text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 sm:text-5xl">
                        Select your ideal
                        <span className=" mx-2 text-[#fe815b]">
                            Pricing
                        </span>
                        plan
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-xl  text-center text-lg sm:text-2xl leading-8 text-[#7f7e7d]">
                    At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
                </p>
                <div className="grid mx-auto max-w-2xl xl:max-w-full  grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={classNames(
                                plan.mostPopular ? 'bg-[#1c1c1c] ' : 'bg-[#ececfa]',
                                ' h-max flex flex-col justify-between rounded-3xl  p-8   xl:p-10'
                            )}
                        >
                            <div>
                                <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold leading-5 text-[#fe815b] uppercase">
                                    {plan.name}
                                </span>

                                <p className={classNames(plan.mostPopular ? 'text-white' : 'text-gray-900', "mt-6 flex items-baseline gap-x-1")}>
                                    <span className="text-4xl font-semibold tracking-tight ">{plan.priceMonthly}</span>
                                    <span className="text-lg font-semibold leading-6 ">/month</span>
                                </p>
                                <ul role="list" className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className=" text-lg text-[#797878] flex gap-2">
                                            <IoMdCheckmark className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={plan.href}
                                className={classNames(
                                    plan.mostPopular
                                        ? 'bg-[#8347fe] text-white shadow-sm '
                                        : ' bg-white text-gray-900',
                                    'w-max mt-8  rounded-xl py-3 px-4  text-lg font-semibold leading-6 '
                                )}
                            >
                                Get started
                            </a>
                        </div>
                    ))}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
