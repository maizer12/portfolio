import { HTag } from '@/shared/common';
import Image from 'next/image';
import projectImg from '../../../../../public/projects/inventory/1.png';
import { Icon } from '@/shared/common/Icon';
import { cibGit, cibMongodb, cibNodeJs, cibReact, cibSass, cibSocketIo } from '@coreui/icons';
import MainButton from '@/shared/common/MainButton';

export default function Project() {
  const features = [
    {
      title: 'Order Management',
      description: 'Users can retrieve, create, and delete orders, providing a seamless workflow for order handling.',
    },
    {
      title: 'Product Management',
      description:
        'Users can retrieve, create, and delete products. Each product created is linked to a specific order, ensuring a clear connection between products and their respective orders.',
    },
    {
      title: 'Search Optimization',
      description:
        'A debounce mechanism is implemented on the search function to reduce server load by limiting the number of queries sent.',
    },
    {
      title: 'React Lazy Loading',
      description:
        'All pages are wrapped with React Lazy for additional optimization, enabling faster application load times by loading components as they are needed.',
    },
    {
      title: 'Lazy Loading of Orders Table',
      description: 'The orders table is lazily loaded to improve performance and speed up the user interface.',
    },
    {
      title: 'Form Validation',
      description: 'All forms are validated to ensure the integrity of the data entered.',
    },
    {
      title: 'Product Page Filtering',
      description: 'Filtering options are available on the products page, simplifying the search for specific items.',
    },
    {
      title: 'Current Date Display',
      description: 'The interface includes the display of the current date.',
    },
    {
      title: 'Real-Time Active User Count',
      description:
        'The number of active users is displayed in real-time, fostering an interactive and dynamic user experience.',
    },
    {
      title: 'Multi-Language Support',
      description: 'The application supports two languages, Ukrainian and English, to cater to a diverse user base.',
    },
    {
      title: 'Loaders for Each Loading Process',
      description:
        'Loaders are implemented for every loading operation to enhance the user experience by providing visual feedback.',
    },
    {
      title: 'File Upload Capability',
      description:
        'Users have the ability to upload files, adding to the functionality and flexibility of the application.',
    },
  ];

  return (
    <section className="py-24 bg-main flex justify-center items-center min-h-screen">
      <div className="max-w-[1200px] w-full mx-auto banner">
        <div className="flex justify-between mb-12">
          <div>
            <p className="text-primary-200 font-inter font-bold">Full Stack Project:</p>
            <HTag tag="h1">DevFlow:</HTag>
          </div>
          {/* <div className="flex gap-4">
            <Icon icon={cibReact} className="w-12" style={{ fill: '#61DAFB' }} />
            <Icon icon={cibNodeJs} className="w-12" style={{ fill: '#339933' }} />
            <Icon icon={cibMongodb} className="w-12" style={{ fill: '#47A248' }} />
            <Icon icon={cibSocketIo} className="w-12" style={{ fill: 'white' }} />
            <Icon icon={cibSass} className="w-12" style={{ fill: '#CC6699' }} />
          </div> */}
        </div>
        <div className="flex gap-4 mb-4">
          <MainButton className="min-w-[114px]">Visit</MainButton>
          <a className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900 hover:border-light-400 fill-primary-200 hover:fill-light-400 duration-300 cursor-pointer">
            {/* <Icon icon={cibGit} /> */}
          </a>
        </div>
        <HTag tag="h5" className="mb-4">
          Description:
        </HTag>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="mb-6">
              <h5 className="text-xl font-semibold text-light-900">
                {index + 1}. {feature.title}
              </h5>
              <p className="text-light-400">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
