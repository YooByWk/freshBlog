// src/database/prisma.service.ts

import { Injectable, Logger } from '@danet/core';
import { OnAppBootstrap, OnAppClose } from '@danet/core/hook';
// 위에서 생성한 단일 PrismaClient 인스턴스를 임포트
import { prismaClientInstance } from './prisma.instance.ts';

@Injectable()
// 더 이상 PrismaClient를 상속받지 않습니다.
export class PrismaService implements OnAppBootstrap, OnAppClose {

  private readonly logger = new Logger('PrismaService');

  constructor() {
    this.logger.log('PrismaService instance created (Lifecycle Manager). This service manages the global PrismaClient instance lifecycle.');
  }

  // Danet 애플리케이션 부트스트랩 시 호출
  async onAppBootstrap(): Promise<void> {
    this.logger.log('Bootstrapping: Attempting to connect global prismaClientInstance...');
    try {
      // 임포트한 단일 PrismaClient 인스턴스의 $connect() 메소드를 호출하고 대기
      await prismaClientInstance.$connect();
      this.logger.log('Bootstrapping: Global prismaClientInstance connected successfully.');

      // NOTE: 이 서비스는 스키마 생성 쿼리를 여기서 실행하지 않습니다.
      // 스키마는 prisma migrate CLI로 관리합니다.

    } catch (error) {
      // 연결 실패 시 반드시 에러를 throw하여 Danet 부트스트랩 중단
      throw error;
    }
    this.logger.log('Bootstrapping: PrismaService initialization complete.');
  }

  // Danet 애플리케이션 종료 시 호출
  async onAppClose(): Promise<void> {
    this.logger.log('Closing: Disconnecting global prismaClientInstance.');
    try {
      // 임포트한 단일 PrismaClient 인스턴스의 $disconnect() 메소드를 호출
      await prismaClientInstance.$disconnect();
      this.logger.log('Closing: Global prismaClientInstance disconnected successfully.');
    } catch (error) {
    }
  }

  // 이 서비스 자체는 다른 컴포넌트에 특정 값을 제공하지 않아도 됩니다.
  // provide: PrismaClient, useValue: prismaClientInstance 설정이
  // DI 컨테이너가 PrismaClient 타입을 요청할 때 전역 인스턴스를 주도록 만듭니다.
}