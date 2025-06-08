import uploadFeature from '@adminjs/upload';
import componentLoader from './component-loader.js';
const localProvider = {
    bucket: 'public/files',
    opts: {
        baseUrl: '/files',
    },
};
export const files = {
    resource: File,
    options: {
        properties: {
            s3Key: {
                type: 'string',
            },
            bucket: {
                type: 'string',
            },
            mime: {
                type: 'string',
            },
            comment: {
                type: 'textarea',
                isSortable: false,
            },
        },
    },
    features: [
        uploadFeature({
            componentLoader,
            provider: { local: localProvider },
            validation: { mimeTypes: ['image/png', 'application/pdf', 'audio/mpeg'] },
        }),
    ],
};
