import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewListItemComponent } from './review-list-item.component';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../../Review';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/*describe('ReviewListItemComponent', () => {
  let component: ReviewListItemComponent;
  let fixture: ComponentFixture<ReviewListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ReviewListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    component = new ReviewListItemComponent();
    component.review = new Review(0, '', 0, '', '0xf3244c4027f1a8b37de750e1841d0480cb120a4d22ae0d1df59d8c0f86804109');

  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct star icons', () => {
    expect(component.faStar).toEqual(faStar);
    expect(component.faStarSolid).toEqual(faStarSolid);
  });

  it('should set the correct user icon', () => {
    expect(component.faUser).toEqual(faUser);
  });

  it('should initialize the stars array with the correct number of stars', () => {
    expect(component.stars.length).toEqual(5);
  });

  it('should set the correct number of stars based on the review rating', () => {
    expect(component.stars[0]).toBeFalse();
    expect(component.stars[1]).toBeFalse();
    expect(component.stars[2]).toBeFalse();
    expect(component.stars[3]).toBeFalse();
    expect(component.stars[4]).toBeFalse();
  });
});*/
