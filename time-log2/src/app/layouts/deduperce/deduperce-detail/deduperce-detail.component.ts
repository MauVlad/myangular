import { Component, OnInit, OnDestroy } from '@angular/core';
import { Deduperce } from '../../../shared/models/deduperce';
import { ActivatedRoute } from '@angular/router';
import { DeduperceService } from '../../../shared/services/deduperce.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-deduperce-detail',
  templateUrl: './deduperce-detail.component.html',
  styleUrls: ['./deduperce-detail.component.scss']
})
export class DeduperceDetailComponent implements OnInit {

  private sub: any;
	deduperce: Deduperce;

	constructor(
		private route: ActivatedRoute,
		private deduperceService: DeduperceService,
		private toastrService: ToastrService
	) {
		this.deduperce = new Deduperce();
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			const id = params['id']; // (+) converts string 'id' to a number
			this.getDeduperceDetail(id);
		});
	}

	getDeduperceDetail(id: string) {
		// this.spinnerService.show();
		const x = this.deduperceService.getDeduperceById(id);
		console.log("id " + id);
		x.snapshotChanges().subscribe(
			(deduperce) => {
				console.log("deduperce" + deduperce)
				// this.spinnerService.hide();
				//const y = deduperce.payload.data() as deduperce;
				this.deduperce = deduperce.payload.data();

				//y['$key'] = id;
				//this.deduperce = y;
			},
			(error) => {
				this.toastrService.error('Error while fetching Deduperce Detail', error);
			}
		);
	}

	addToCart(deduperce: Deduperce) {
		this.deduperceService.addToCart(deduperce);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
