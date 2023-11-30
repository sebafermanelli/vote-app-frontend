import { FormGroup } from '@angular/forms';

export class ValidatorHelper {
  static areCamposCompletos(loadList: FormGroup): boolean {
    const descriptionControl = loadList.get('description');
    const rol1Id = loadList.get('rol1Id');
    const rol2Id = loadList.get('rol2Id');
    const rol3Id = loadList.get('rol3Id');
    return (
      (descriptionControl?.valid ?? false) &&
      (rol1Id?.valid ?? false) &&
      (rol2Id?.valid ?? false) &&
      (rol3Id?.valid ?? false)
    );
  }
}
