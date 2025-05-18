import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TestComponent } from './pages/test/test.component';
import { MentorshipComponent } from './pages/mentorship/mentorship.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'test', component: TestComponent },
    { path: 'mentorship', component: MentorshipComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blogs', component: BlogListComponent },
    { path: 'blogs/:id', component: BlogDetailComponent },
    { path: '**', redirectTo: '' }
];
