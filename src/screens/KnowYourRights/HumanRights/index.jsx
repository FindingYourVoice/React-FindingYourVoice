import React from 'react';
import { View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ExternalRefButton from 'components/ExternalRefButton';

import headerImage from 'assets/placeholder.png';
import colors from 'config/colors.json';

const HumanRights = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.lightGrey,
      }}
    >
      <PageHeader source={headerImage} />
      <View
        style={{
          backgroundColor: colors.lightGrey,
          paddingHorizontal: 24,
          paddingBottom: 80,
        }}
      >
        <Heading>Human Rights</Heading>

        <Paragraph>
          In addition to workplace safety, hazards, rights, and standards,
          Alberta has legislation that relates to the rights of all people,
          regardless of background such as ethnocultural group, source of
          income, participation in a labour union, gender, age, sexual
          orientation, or immigration status:
        </Paragraph>

        <ExternalRefButton
          icon="file-download"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.albertahumanrights.ab.ca/Documents/HR_in_AB_printable_booklet.pdf',
            )
          }
          style={{ marginBottom: 24 }}
        >
          Alberta Human Rights
        </ExternalRefButton>

        <Paragraph>
          Human Rights in Alberta relate to the idea that everyone should be
          free from discrimination, and applies to employers and workers. In
          cases of human rights violations specific steps need to be taken.
        </Paragraph>

        <ExternalRefButton
          icon="file-download"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.albertahumanrights.ab.ca/Documents/GuideProcess_Complainants.pdf',
            )
          }
        >
          Complainants Guide
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default HumanRights;
