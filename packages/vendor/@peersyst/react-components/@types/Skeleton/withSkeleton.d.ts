import { JSXElementConstructor } from "react";
import { WithLoading, WithSkeletonProps } from "./Skeleton.types";
export declare function withSkeleton<TProps = {}>(WrappedComponent: JSXElementConstructor<TProps>, skeletonProps?: WithSkeletonProps): JSXElementConstructor<WithLoading<TProps>>;
