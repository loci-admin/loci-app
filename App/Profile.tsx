import React, { useEffect, useState } from 'react';

import { Layout, Text } from '@ui-kitten/components';

import { Modal, ModalProps } from '@/Components';

function Profile() {
  const [visible, shouldBeVisible] = useState(false);

  useEffect(
    () => {
      const debounce = window.setTimeout(
        () => {
          shouldBeVisible(true);
        },
        10000
      );

      return () => {
        window.clearTimeout(debounce);
      }
    }
  );

  const onClose: ModalProps['onClose'] = () => {
    shouldBeVisible(false);
  }

  return (
    <Layout level='1'>
      <Modal onClose={onClose} visible={visible}>
        <Text category='h1'>
          Profiles
        </Text>
      </Modal>
    </Layout>
  );
}

export default Profile;
