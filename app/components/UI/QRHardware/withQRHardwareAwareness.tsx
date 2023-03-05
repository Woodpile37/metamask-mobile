import React, { useState, useEffect, useRef, ComponentClass } from 'react';
import React, { Component, ComponentClass } from 'react';
import Engine from '../../../core/Engine';
import { IQRState } from './types';

const withQRHardwareAwareness = (
  Children: ComponentClass<{
    QRState?: IQRState;
    isSigningQRObject?: boolean;
    isSyncingQRHardware?: boolean;
  }>,
) => {
  const QRHardwareAwareness = (props: any) => {
    const keyringState: any = useRef();
    const [QRState, SetQRState] = useState<IQRState>({
      sync: {
        reading: false,
      },
      sign: {},
    });

    const subscribeKeyringState = (value: any) => {
      SetQRState(value);
    };

    useEffect(() => {
      const { KeyringController } = Engine.context as any;
      KeyringController.getQRKeyringState().then((store: any) => {
        keyringState.current = store;
        keyringState.current.subscribe(subscribeKeyringState);
      });
      return () => {
        if (keyringState.current) {
          keyringState.current.unsubscribe(subscribeKeyringState);
        }
      };
    }, []);

    return (
      <Children
        {...props}
        isSigningQRObject={!!QRState.sign?.request}
        isSyncingQRHardware={QRState.sync.reading}
        QRState={QRState}
      />
    );
  };

  return QRHardwareAwareness;
	Children: ComponentClass<{
		QRState?: IQRState;
		isSigningQRObject?: boolean;
		isSyncingQRHardware?: boolean;
	}>
) => {
	class QRHardwareAwareness extends Component<any, any> {
		state: {
			QRState: IQRState;
		} = {
			QRState: {
				sync: {
					reading: false,
				},
				sign: {},
			},
		};

		keyringState: any;

		subscribeKeyringState = (value: any) => {
			this.setState({
				QRState: value,
			});
		};

		componentDidMount() {
			const { KeyringController } = Engine.context as any;
			KeyringController.getQRKeyringState().then((store: any) => {
				this.keyringState = store;
				this.keyringState.subscribe(this.subscribeKeyringState);
			});
		}

		componentWillUnmount() {
			if (this.keyringState) {
				this.keyringState.unsubscribe(this.subscribeKeyringState);
			}
		}

		render() {
			return (
				<Children
					{...this.props}
					isSigningQRObject={!!this.state.QRState.sign?.request}
					isSyncingQRHardware={this.state.QRState.sync.reading}
					QRState={this.state.QRState}
				/>
			);
		}
	}
	return QRHardwareAwareness;
};

export default withQRHardwareAwareness;
