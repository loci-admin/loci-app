import React, { useEffect, useRef, useState } from 'react';

import { Animated } from 'react-native';

import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Button,
  ButtonProps,
  Card,
  CardProps,
  Modal as Origin,
  ModalProps,
} from '@ui-kitten/components';

import * as Icons from '@/Components/Icon';

const styles = {
  Backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  } satisfies ModalProps['backdropStyle'],
  Button: {
    borderRadius: 36,
    paddingHorizontal: 0,
    paddingVertical: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  } satisfies ButtonProps['style'],
  Card: {
    borderRadius: 48,
    borderWidth: 0,
    flex: 1,
    maxWidth: 'auto',
    overflow: 'scroll',
    paddingHorizontal: 24,
    paddingVertical: 36,
  } satisfies CardProps['style'],
}

type Props = ModalProps & Pick<Parameters<typeof Animated.timing>[1], 'duration'> & {
  onClose?: () => void,
  onOpen?: () => void,
}

const DURATION = 150;

function Modal({ children, duration = DURATION, onClose, onOpen, visible: _visible, ...props }: Props) {
  const [visible, shouldBeVisible] = useState<typeof _visible>(_visible);

  const frames = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const slide = useRef(new Animated.Value(0)).current;

  const close = () => {
    Animated.timing(slide, {
      toValue: frames.height,
      duration,
      useNativeDriver: true,
    }).start(
      () => {
        shouldBeVisible(false);
        onClose?.();
      }
    );
  }

  const open = () => {
    shouldBeVisible(true);
    Animated.timing(slide, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start(onOpen);
  }

  useEffect(
    () => {
      if (_visible) {
        open();
        return;
      }

      close();
    },
    [_visible]
  );

  return (
    <Origin
      {...props}
      animationType='fade'
      backdropStyle={styles.Backdrop}
      focusable
      onBackdropPress={close}
      visible={visible}
    >
      <Animated.ScrollView
        style={{
          transform: [{
            translateY: slide
          }]
        }}
      >
        <Card
          style={{
            ...styles.Card,
            height: frames.height,
            top: insets.top,
            width: frames.width,
          }}
        >
          {children}
          <Button
            accessoryLeft={Icons.Close}
            aria-label='close'
            appearance='ghost'
            onPress={close}
            style={styles.Button}
          />
        </Card>
      </Animated.ScrollView>
    </Origin>
  );
}

export { Props };
export default Modal;
