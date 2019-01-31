import { PModuloModule } from './p-modulo.module';

describe('PModuloModule', () => {
  let pModuloModule: PModuloModule;

  beforeEach(() => {
    pModuloModule = new PModuloModule();
  });

  it('should create an instance', () => {
    expect(pModuloModule).toBeTruthy();
  });
});
