'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'next/navigation';
import SectionAbout from '../../../(client-components)/(Admin)/Config/Forms/SectionAbout';
import SectionFaq from '../../../(client-components)/(Admin)/Config/Forms/SectionFaq';
import SectionGuide from '../../../(client-components)/(Admin)/Config/Forms/SectionGuide';
import SectionHero from '../../../(client-components)/(Admin)/Config/Forms/SectionHero';
import SectionService from '../../../(client-components)/(Admin)/Config/Forms/SectionService';
import SectionCardService from '../../../(client-components)/(Admin)/Config/Forms/SectionCardService';
import SectionOurFeatures from '../../../(client-components)/(Admin)/Config/Forms/SectionOurFeatures';
import SectionCardOffer from '../../../(client-components)/(Admin)/Config/Forms/SectionCardOffer';
import SectionOffer from '../../../(client-components)/(Admin)/Config/Forms/SectionOffer';
import SectionBookingSuccess from '../../../(client-components)/(Admin)/Config/Forms/SectionBookingSuccess';
import SectionTeam from "../../../(client-components)/(Admin)/Config/Forms/SectionTeam";
import SectionValue from "../../../(client-components)/(Admin)/Config/Forms/SectionValue";
import SectionBanner from "../../../(client-components)/(Admin)/Config/Forms/SectionBanner";

const componentMapping = {
  1: SectionAbout,
  5: SectionFaq,
  6: SectionGuide,
  10: SectionService,
  4: SectionCardService,
  2: SectionBookingSuccess,
  11: SectionTeam,
  12: SectionValue,
  13: SectionBanner,
};

const ConfigIdPage = ({ params }) => {
  const searchParams = useSearchParams();
  const { id } = params;
  const scope = searchParams.get('scope') || '';

  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/config/${id}`);
          if (response.ok) {
            const result = await response.json();
            setData(result);
          } else {
            console.error('Failed to fetch data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const numericScope = parseInt(scope, 10);
  const ActiveComponent = componentMapping[numericScope] || null;

  if (!ActiveComponent) {
    console.error(`Componente no encontrado para el scope: ${scope}`);
  }

  return (
    <>
      {ActiveComponent ? (
        <ActiveComponent scope={scope} data={data} />
      ) : (
        <p>Componente no encontrado para el scope: {scope}</p>
      )}
    </>
  );
};

ConfigIdPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConfigIdPage;
