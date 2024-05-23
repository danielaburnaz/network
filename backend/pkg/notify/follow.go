package notify

import (
	"fmt"
	"html"
	"social-network/pkg/models"
)

type Follow struct {
	follower  *models.User
	following int64
}

func (n Notifier) Follow(follower *models.User, following int64) {
	n.notify(Follow{
		follower:  follower,
		following: following,
	})
}

func (f Follow) Targets() []int64 {
	return []int64{f.following}
}

func (f Follow) Message() string {
	msg := MessageContent{
		Type:     "follow",
		Action:   "follow",
		UserName: html.EscapeString(userGetName(f.follower)),
		UserID:   f.follower.ID,
		Endpoint: fmt.Sprintf("/user/%v", f.follower.ID),
	}

	//return fmt.Sprintf("<strong>%v</strong> is now your follower!", html.EscapeString(userGetName(f.follower)))
	return fmt.Sprintf("%v", msg.JSON())
}

func (f Follow) Links() []Link {
	return []Link{
		{
			name:   "See their profile",
			url:    fmt.Sprintf("/user/%v", f.follower.ID),
			method: "GET",
		},
	}
}
