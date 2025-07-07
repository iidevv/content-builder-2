import { type Config } from '@measured/puck'

export const config: Config = {
    components: {
        HeadingBlock: {
            fields: {
                children: {
                    type: "text",
                },
            },
            render: ({ children }) => {
                return <h1>{children}</h1>;
            },
        },
    },
}

export default config
