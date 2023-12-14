import PropTypes from 'prop-types';
import React, {RefObject} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import ConfirmContent from './ConfirmContent';
import {PopoverAnchorPosition} from './Modal/types';
import Popover from './Popover';
import withWindowDimensions from './withWindowDimensions';
import {WindowDimensionsContextData} from './withWindowDimensions/types';

type ConfirmPopoverProps = {
    /** Title of the modal */
    title: string;

    /** A callback to call when the form has been submitted */
    onConfirm: () => void;

    /** A callback to call when the form has been closed */
    onCancel?: () => void;

    /** Modal visibility */
    isVisible: boolean;

    /** Confirm button text */
    confirmText?: string;

    /** Cancel button text */
    cancelText?: string;

    /** Is the action destructive */
    danger?: boolean;

    /** Whether we should show the cancel button */
    shouldShowCancelButton?: boolean;

    /** Modal content text/element */
    prompt?: string | React.ReactNode;

    /** Where the popover should be positioned */
    anchorPosition?: PopoverAnchorPosition;

    /** Styles for view */
    contentStyles?: StyleProp<ViewStyle>;
} & WindowDimensionsContextData;

function ConfirmPopover({
    onConfirm,
    onCancel = () => {},
    isVisible,
    anchorPosition,
    contentStyles,
    title,
    prompt = '',
    confirmText = '',
    cancelText = '',
    danger = false,
    shouldShowCancelButton = true,
}: ConfirmPopoverProps) {
    return (
        <Popover
            onSubmit={onConfirm}
            onClose={onCancel}
            isVisible={isVisible}
            anchorPosition={anchorPosition}
        >
            <ConfirmContent
                contentStyles={contentStyles}
                title={title}
                prompt={prompt}
                confirmText={confirmText}
                cancelText={cancelText}
                danger={danger}
                shouldShowCancelButton={shouldShowCancelButton}
                onConfirm={onConfirm}
                onCancel={onCancel}
                onClose={onCancel}
            />
        </Popover>
    );
}

ConfirmPopover.displayName = 'ConfirmPopover';
export default withWindowDimensions(ConfirmPopover);
