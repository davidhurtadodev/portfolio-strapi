// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { Project } from '../../../project/content-types/project/project';
import { Media_Plain } from '../../../../common/schemas-to-ts/Media';
import { Project_Plain } from '../../../project/content-types/project/project';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Technology {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Name?: string;
    Image?: { data: Media };
    projects?: { data: Project[] };
    slug?: string;
  };
}
export interface Technology_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Name?: string;
  Image?: Media_Plain;
  projects?: Project_Plain[];
  slug?: string;
}

export interface Technology_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Name?: string;
  Image?: number;
  projects?: number[];
  slug?: string;
}

export interface Technology_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Name?: string;
  Image?: AdminPanelRelationPropertyModification<Media_Plain>;
  projects?: AdminPanelRelationPropertyModification<Project_Plain>;
  slug?: string;
}
